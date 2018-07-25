######################################
# Run after adding a comic to folder #
######################################

import os, sys, time
from stat import S_ISREG, ST_CTIME, ST_MODE

dirpath = "Comics"

# get all entries in the directory w/ stats
entries = (os.path.join(dirpath, fn) for fn in os.listdir(dirpath))
entries = ((os.stat(path), path) for path in entries)

# leave only regular files, insert creation date
entries = ((stat[ST_CTIME], path)
           for stat, path in entries if S_ISREG(stat[ST_MODE]))
           
#NOTE: on Windows `ST_CTIME` is a creation date 
#  but on Unix it could be something else
#NOTE: use `ST_MTIME` to sort by a modification date

javascript_text = open("myjs.js", "r")
jslist = list(javascript_text)

javascript_text.close()


filename_list = []

index = 1
for cdate, path in sorted(entries):
    filename = os.path.basename(path)
    filename_list.append(filename)
    index += 1

new_js = open("myjs.js", "w")

firstline = "var filenames = " + str(filename_list) + " \n"
new_js.write(firstline)
for i in range(1, len(jslist)):
    new_js.write(jslist[i])

new_js.close()

