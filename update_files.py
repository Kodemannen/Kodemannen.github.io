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

comics_list_file = open("filenames.txt", "w")
javascript_text = open("myjs.js", "r")

filename_list = []

index = 1
for cdate, path in sorted(entries):
    filename = os.path.basename(path)
    comics_list_file.write(str(index) + " " + filename + "\n")
    filename_list.append(filename)
    index += 1


javascript_gen_test = open("generated_javascript.js", "w")

firstline = "var filenames = " + str(filename_list) + " \n"
javascript_gen_test.write(firstline)
javascript_text.readline()
for line in javascript_text:
    javascript_gen_test.write(line)

javascript_gen_test.close()
comics_list_file.close()
javascript_text.close()