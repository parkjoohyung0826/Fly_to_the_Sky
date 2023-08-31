import zipfile

# image_val 데이터 압축 해제하기

val_image_file=zipfile.ZipFile('/home/yang/YOLO/datasets/images/val/VS.이미지.해운대.GLORY.zip')
val_image_file.extractall('/home/yang/YOLO/datasets/images/val')

val_image_file=zipfile.ZipFile('/home/yang/YOLO/datasets/images/val/VS.이미지_2.송정_2.SJHT1.zip')
val_image_file.extractall('/home/yang/YOLO/datasets/images/val')

val_image_file=zipfile.ZipFile('/home/yang/YOLO/datasets/images/val/VS.이미지_3.중문.BADA1.zip')
val_image_file.extractall('/home/yang/YOLO/datasets/images/val')

val_image_file.close()