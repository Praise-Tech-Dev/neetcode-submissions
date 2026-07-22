class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        start = 1
        end = max(piles)
        while(start <= end):
            k = (start + end) // 2 

            total_hours = 0

            for pile in piles:

                total_hours += math.ceil(pile/k)

            if (total_hours > h):
                start = k + 1

            else:

                end = k - 1
                



        return start

            