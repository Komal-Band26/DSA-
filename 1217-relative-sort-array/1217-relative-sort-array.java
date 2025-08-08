import java.util.*;
class Solution {
    public int[] relativeSortArray(int[] arr1, int[] arr2) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < arr2.length; i++) map.put(arr2[i], i);
        Integer[] temp = new Integer[arr1.length];
        for (int i = 0; i < arr1.length; i++) temp[i] = arr1[i];
        Arrays.sort(temp, (a, b) -> {
            if (map.containsKey(a) && map.containsKey(b)) return map.get(a) - map.get(b);
            else if (map.containsKey(a)) return -1;
            else if (map.containsKey(b)) return 1;
            else return a - b;
        });
        for (int i = 0; i < arr1.length; i++) arr1[i] = temp[i];
        return arr1;
    }
}
