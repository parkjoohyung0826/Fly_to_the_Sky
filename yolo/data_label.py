import os
import glob
import json
import zipfile
import numpy as np

# 라벨 train 데이터 변환
files = glob.glob("datasets/original_labels/train/*.json")

for f in files:
    json_data = json.load(open(f, "r"))
    bbox = json_data["annotations"]["drawing"]
    cls = json_data["annotations"]["class"]
    basename = os.path.basename(f).replace(".json", ".txt")
    with open(os.path.join("datasets/labels/train", basename), "w") as f:
        if bbox is not None:
            for b in bbox:
                center = np.sum(b, axis=0) / 4 
                width = abs(b[0][0] - b[0][1])
                height = abs(b[0][1] - b[2][1])
                
                d = [0, center[0] / 1920, center[1] / 1080, width / 1920, height / 1080]
                f.write(" ".join([str(i) for i in d]) + "\n")


# 라벨 val 데이터 압축풀기-해운대
val_label_file=zipfile.ZipFile('/home/yang/YOLO/datasets/original_labels/val/VL.JSON.해운대.GLORY.zip')
val_label_file.extractall('/home/yang/YOLO/datasets/original_labels/val')
val_label_file.close()

# 라벨 val 데이터 압축풀기-송정
val_label_file=zipfile.ZipFile('/home/yang/YOLO/datasets/original_labels/val/VL.JSON_2.송정_2.SJHT1.zip')
val_label_file.extractall('/home/yang/YOLO/datasets/original_labels/val')
val_label_file.close()

# 라벨 val 데이터 압축풀기-중문
val_label_file=zipfile.ZipFile('/home/yang/YOLO/datasets/original_labels/val/VL.JSON_3.중문.BADA1.zip')
val_label_file.extractall('/home/yang/YOLO/datasets/original_labels/val')
val_label_file.close()

## 라벨 val 데이터 변환
files = glob.glob("datasets/original_labels/val/*.json")

for f in files:
    json_data = json.load(open(f, "r"))
    bbox = json_data["annotations"]["drawing"]
    cls = json_data["annotations"]["class"]
    basename = os.path.basename(f).replace(".json", ".txt")
    with open(os.path.join("datasets/labels/val", basename), "w") as f:
        if bbox is not None:
            for b in bbox:
                center = np.sum(b, axis=0) / 4 
                width = abs(b[0][0] - b[0][1])
                height = abs(b[0][1] - b[2][1])
                
                d = [0, center[0] / 1920, center[1] / 1080, width / 1920, height / 1080]
                f.write(" ".join([str(i) for i in d]) + "\n")

