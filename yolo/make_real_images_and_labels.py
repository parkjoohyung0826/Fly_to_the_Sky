import os

def check_data(mode="val"):
    # dir에 있는 파일들 가져오기
    image_data = set(os.listdir(f"datasets/images/{mode}"))
    label_data = set(os.listdir(f"datasets/labels/{mode}"))

    # label엔 있지만 image엔 없는 파일들 제거
    for f in label_data:
        if "txt" not in f:
            continue
        if os.path.basename(f).replace(".txt", ".jpg") not in image_data:
            print(f"remove {f}")
            os.remove(f"datasets/labels/{mode}/{f}")

    # image엔 있지만 label엔 없는 파일들 제거
    for f in image_data:
        if "jpg" not in f:
            continue
        if os.path.basename(f).replace(".jpg", ".txt") not in label_data:
            print(f"remove {f}")
            os.remove(f"datasets/images/{mode}/{f}")


if __name__ == "__main__":
    check_data(mode="val")
    check_data(mode="train")
