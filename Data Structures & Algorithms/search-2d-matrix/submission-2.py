class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for i in range(len(matrix)):

                if (target == matrix[i][0]):
                    return True

                elif (target > matrix[i][0]):
                    if (target > matrix[i][-1]):
                        continue
                    
                elif (target < matrix[i][0]):
                    if i == 0:
                        return False
                    
                start = 0
                end = len(matrix[i]) - 1

                while start <= end:
                    mid = start + (end - start)//2

                    if (matrix[i][mid] == target):
                        return True

                    elif (matrix[i][mid] < target):
                        start = mid + 1

                    else:
                        end = mid - 1
                i+=1
        return False
            
            