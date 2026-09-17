class Solution:

    def isAnagram(self, s: str, t: str) -> bool:
        
        if len(s) != len(t):

            return False
        
        dicts = {}

        dictt = {}

        for i in s:

            if i not in dicts:
                
                dicts[i] = 1

            else:
                
                dicts[i] += 1

        for a in t:

            if a not in dictt:
                
                dictt[a] = 1
            
            else:
                
                dictt[a] += 1

        if dicts == dictt:
             
             return True

        else: 
            
            return False




