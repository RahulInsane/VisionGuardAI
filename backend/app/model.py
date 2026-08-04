from pathlib import Path
import torch
import torch.nn as nn
from torchvision import models

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_PATH = BASE_DIR / "model" / "best_model.pth"


def load_model():
    model = models.resnet18(weights=None)

    model.fc = nn.Linear(model.fc.in_features, 2)

    model.load_state_dict(
        torch.load(
            MODEL_PATH,
            map_location=device
        )
    )

    model.to(device)
    model.eval()

    return model


model = load_model()