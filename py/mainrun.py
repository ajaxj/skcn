#!/usr/bin/python
#coding:utf-8
from skhere.skhere import Skhere

if __name__ == '__main__':
    obj = Skhere()
    url = "http://www.skatehere.com/?cat=4538"
    obj.parseList(url,u"国际")
    url = "http://www.skatehere.com/?cat=4537"
    obj.parseList(url, u"国内")
