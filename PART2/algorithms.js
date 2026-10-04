function flatUnique(arr) {
      const arrSet = new Set();
      const flat = arr.flat(Infinity);
      const sortedFlat = flat.sort((a, b) => a - b);

      for (let i = 0; i < sortedFlat.length; i++) {
        arrSet.add(sortedFlat[i]); // Set automatically handles uniqueness
      }

      return Array.from(arrSet); // Convert Set back to an Array
    }

    function twoSum(nums, target) {
      for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
          if(nums[i] + nums[j] === target) {
            return [i, j]
          }
        }
      }
    }

    function isAnagram(s, t) {
      if (s.length !== t.length) return false;

      const countMap = new Map();

      // Count frequencies in s
      for (let char of s) {
        countMap.set(char, (countMap.get(char) || 0) + 1);
      }

      // Decrement frequencies using t
      for (let char of t) {
        if (!countMap.has(char) || countMap.get(char) === 0) {
          return false;
        }
        countMap.set(char, countMap.get(char) - 1);
      }

      return true;
    }

    function groupAnagrams(words) {
      const map = new Map();

      for (const word of words) {
        const sortedKey = word.split('').sort().join('');

        if (!map.has(sortedKey)) {
          map.set(sortedKey, [])
        }

        map.get(sortedKey).push(word);
      }

      return Array.from(map.values());
    }

    function lengthOfLongestSubstring(s) {
      const CharSet = new Set();
      let left = 0;
      let maxlength = 0;
      let maxStart = 0;

      for(let right = 0; right < s.length; right++) {

        while (CharSet.has(s[right])) {
          CharSet.delete(s[left]);
          left++;
        }
        CharSet.add(s[right])

        let currentLength = right - left + 1
        maxlength = Math.max(maxlength, currentLength);
        if (currentLength > maxlength) {
          // currentLength = maxlength;
          maxStart = left;
        }
      }

      return (maxlength, `("${s.substring(maxStart, maxStart + maxlength)}")`);
    }
    