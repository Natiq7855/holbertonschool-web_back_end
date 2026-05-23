#!/usr/bin/env python3
"""
This module provides a type-annotated function that returns a multiplier function.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Takes a float multiplier and returns a function that multiplies
    a given float by that multiplier.
    """

    def multiplier_function(n: float) -> float:
        return n * multiplier

    return multiplier_function
