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

# for cdate, path in sorted(entries):
#     print(time.ctime(cdate), os.path.basename(path))

index = 1
for cdate, path in sorted(entries):
    filename = os.path.basename(path)
    comics_list_file.write(str(index) + " " + filename + "\n")
    index += 1

comics_list_file.close()  