#!/usr/bin/env python3
"""
This module provides a type-annotated function for string concatenation.
"""


def sum_list(input_list: float) -> float:
    """
    Takes two strings and returns them concatenated together.
    """
    sum = 0
    for i in range(len(input_list)):
        sum = sum + input_list[i]
    return sum
