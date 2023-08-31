from ultralytics import YOLO

model = YOLO("rip/640_image4/weights/best.pt")

results = model.predict("/home/yang/YOLO/datasets/images/val/SJ_SJHT1_20210726_114354.jpg", save=True)

    
print(results)
