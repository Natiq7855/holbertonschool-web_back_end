#!/usr/bin/env python3
import csv
import math
from typing import List
"""sdfsfdh sdjfsnd dsjf sd"""



def index_range(page, page_size) -> tuple[int, int]:
    """sfjj dfgdf g dfg df dfg"""

    start_page = (page - 1) * page_size
    end_page = start_page + page_size
    return (start_page, end_page)

class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
            pass

def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Get the requested page from the dataset."""
        assert (
            isinstance(page, int) and page > 0
        ), "page must be an integer greater than 0"
        assert (
            isinstance(page_size, int) and page_size > 0
        ), "page_size must be an integer greater than 0"
        data = self.dataset()
        start, end = index_range(page, page_size)
        if start >= len(data):
            return []
        return data[start:end]
