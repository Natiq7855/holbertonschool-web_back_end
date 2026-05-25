#!/usr/bin/env python3
"""Module for asynchronous comprehensions."""

from typing import List

# Import async_generator from the previous file
async_generator = __import__('5-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collect 10 random numbers using an async comprehension

    over async_generator, then return the 10 random numbers.
    """
    # An asynchronous list comprehension collects yielded values on the fly
    return [number async for number in async_generator()]