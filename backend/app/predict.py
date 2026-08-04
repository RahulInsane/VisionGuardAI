import time
import torch

from app.model import model
from app.utils import preprocess_image

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

classes = [
    "REAL",
    "FAKE"
]


def predict(image_path):

    # Start timer
    start = time.time()

    image = preprocess_image(image_path)
    image = image.to(device)

    with torch.no_grad():

        outputs = model(image)

        probabilities = torch.softmax(outputs, dim=1)

        confidence, predicted = torch.max(probabilities, 1)

        real_probability = probabilities[0][0].item() * 100
        fake_probability = probabilities[0][1].item() * 100

    # End timer
    end = time.time()

    # Convert to milliseconds
    inference_time = round((end - start) * 1000, 2)

    return {
    "prediction": classes[predicted.item()],
    "confidence": round(confidence.item() * 100, 2),
    "real_probability": round(real_probability, 2),
    "fake_probability": round(fake_probability, 2),
    "inference_time": inference_time
    }