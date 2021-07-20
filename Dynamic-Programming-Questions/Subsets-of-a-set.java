import java.util.*;

public class PowerSet {

     public static void main(String []args){
        int n = 6;
        int[] set = {1,2,3,4,5,6};
      
      
        if (n == 0) System.out.println(0);
        
        List<List<Integer>> subsets = new ArrayList();
        subsets.add(new ArrayList());
        subsets.add(new ArrayList());
        subsets.get(1).add(1);
        
        List<Integer> temp_list;
        
        for(int q = 1; q < subsets.size(); q++) {
            temp_list = subsets.get(q);
            temp_list.add(q+1);
            temp_list.add(q);
            //temp_list.add();
        }
        
        
        for(int i = 0; i < subsets.size(); i++) {
            for(int j = 0; j < subsets.get(i).size(); j++) {
                System.out.println("[" + subsets.get(i).get(j) + "]");
            }
            if (subsets.get(i).size() == 0) System.out.println("[]");
        }
        
     }
}
