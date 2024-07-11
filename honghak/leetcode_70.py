class Solution:
    def climbStairs(self, n: int) -> int:
        dp = [0 for _ in range(n+1)]
        
        for i in range(1, n+1):
            if i == 1 or i == 2:
                dp[i] = i
                continue
            
            dp[i] = dp[i-1] + dp[i-2] 
        
        return dp[n]