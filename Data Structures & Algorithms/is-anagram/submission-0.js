class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // check length
        if (s.length !== t.length){
            return false
        }

    const charMap = new Map();

    // Step 2: Build the frequency map using the first string
    for (const char of s) {
        // Get the current count (default to 0 if it doesn't exist yet)
        const currentCount = charMap.get(char) || 0;
        charMap.set(char, currentCount + 1);
    }

    // Step 3: Compare and decrement using the second string
    for (const char of t) {
        // If the character doesn't exist in our map, it's an immediate failure
        if (!charMap.has(char)) {
        return false;
        }

        const currentCount = charMap.get(char);
        
        // If the count is already 0, using it again means str2 has *more* of this letter
        if (currentCount === 0) {
        return false;
        }

        charMap.set(char, currentCount - 1);
    }

    // Step 4: If we successfully matched every single character, it's an anagram
    return true;
    }

    }
