function longestCommonSubstring(str1: string, str2: string): number {
    const m = str1.length;
    const n = str2.length;
    
    const dp: number[][] = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
    
    let maxLength = 0;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                maxLength = Math.max(maxLength, dp[i][j]);
            } else {
                dp[i][j] = 0;
            }
        }
    }

    return maxLength;
}

const str1 = "blue";
const str2 = "clues";
const result = longestCommonSubstring(str1, str2);
console.log("Longest common substring length:", result);
