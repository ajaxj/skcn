#! /usr/bin/python
# coding:utf-8
import logging
import logging.config
import sys
import urllib2
import MySQLdb
from bs4 import BeautifulSoup

from utils.utils import cur_file_dir


_host = "127.0.0.1"
_user = "root"
_passwd = "12345678"
_db = "skdb"

#一个skatehere的类
class Skhere:
    #TODO 这里是win下面的的路径
    logging.config.fileConfig(cur_file_dir() + "\logger.conf")
    # logger = logging.getLogger("My")    #如果是选择另一个logger
    logger = logging.getLogger()        #默认是root

    def parseList(self,url,category):
        try:
            print url
            request = urllib2.Request(url)
            response = urllib2.urlopen(request,None,100)
            _html = response.read()
            soup = BeautifulSoup(_html, "html5lib")
            divs = soup.findAll("div",{"class":"archiveblock"})     #取出了所有的DIV
            for div in divs:
                _title =  div.h4.text
                _fetchurl = div.a.get("href")
                self.insertMv(_title,_fetchurl,category)


        except Exception,e:
            # self.logger.error(e)
            print e
            sys.exit()

    def insertMv(self,title,fetchurl,category):
        conn = MySQLdb.connect(host=_host,user=_user,passwd=_passwd,db=_db,charset="utf8")
        cur = conn.cursor()
        try:
            sql = "SELECT * FROM fetchmovies where fetchurl='%s'" %(fetchurl)
            cur.execute(sql)
            if cur.fetchone() == None:
                sql = "INSERT INTO fetchmovies(title,fetchurl,category) VALUES('%s','%s','%s')" %(title,fetchurl,category)
                cur.execute(sql)
                conn.commit()
        except Exception,e:
            print e
        finally:
            cur.close()
            conn.close()
