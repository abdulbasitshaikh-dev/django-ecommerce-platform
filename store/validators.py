from django.core.exceptions import ValidationError


def validate_file_size(file):
    max_kb_size = 50

    if file.size > max_kb_size * 1024:
        raise ValidationError(f'Max file size is {max_kb_size}KB!')