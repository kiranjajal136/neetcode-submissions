class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let p = [];

        if(s.length<2) return false

        for(let i=0;i<s.length;i++) {
            if(s.charAt(i) === '(' || s.charAt(i) === '[' || s.charAt(i) === '{') {
                p.push(s.charAt(i))
            } else {
                if(s.charAt(i) === ')' && p[p.length - 1] === '(') p.pop();
                else if(s.charAt(i) === ']' && p[p.length - 1] === '[') p.pop();
                else if(s.charAt(i) === '}' && p[p.length - 1] === '{') p.pop();
                else return false
            }
        }

        if(p.length === 0) return true;
        return false;
    }
}
