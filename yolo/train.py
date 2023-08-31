import os
import glob
from ultralytics import YOLO


if __name__ == "__main__":
    model = YOLO("yolov8n.pt")

    model.train(data="data.yaml", mosaic=1.0, degrees=30, lr0=0.01, lrf=0.01, epochs=40, resume=False, pretrained=False, imgsz=640, val=True, project="rip", name="augment_n", workers=12, batch=32, cache="True/disk")
    metrics = model.val()
