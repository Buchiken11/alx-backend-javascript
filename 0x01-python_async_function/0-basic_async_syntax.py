#!/usr/bin/env python
import random
import asyncio

async def wait_random(max_delay=10):
    duration = random.uniform(0, max_delay)
    await asyncio.sleep(duration)
    return duration

if __name__ == "__main__":
    asyncio.run (wait_random())
