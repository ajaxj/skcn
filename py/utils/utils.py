#! /usr/bin/python
# coding:utf-8

import os
import sys


#取出当前的路径
def cur_file_dir():
    path = sys.path[0]
    if os.path.isdir(path):
        return path
    elif os.path.isfile(path):
        return os.path.dirname(path)
