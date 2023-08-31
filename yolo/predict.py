from ultralytics import YOLO

model = YOLO("rip/640_image4/weights/best.pt")

results = model.predict("/home/yang/YOLO/datasets/images/val/SJ_SJHT1_20210726_114354.jpg", save=False)

for box in results[0].boxes:
    print(f"confidence: {box.conf.cpu().numpy()[0]}")
    
# print(results)
