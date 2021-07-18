import java.util.Arrays;

public class TripleStep {

    // Improved Bottom up approach without memoization with iteration (save on memory)
    
    /*
    public static void main(String []args) {
        int n = 20;
        
        if(n == 0) System.out.println(0);
        
        int st_0 = 0;
        int st_1 = 1;
        int st_2 = 2;
        int st_temp;
        
        for(int i = 3; i < n; i++) {
            st_temp = st_0 + st_1 + st_2;
            st_0 = st_1;
            st_1 = st_2;
            st_2 = st_temp;
        }
        
        System.out.println(st_0 + st_1 + st_2);
        
    }
    */
    
    // Bottom up approach with memoization and recursion
    
    /*
    public static void main(String []args) {
        int n = 20;
        
        if (n == 0) System.out.println(0);
        int[] memo = new int[n+1];
        
        memo[0] = 0;
        memo[1] = 1;
        memo[2] = 2;
        
        recursiveTripleStep(n, 3, memo);
        
        System.out.println(memo[n]);
        System.out.println(Arrays.toString(memo));
    }
    
    private static void recursiveTripleStep(int n, int i, int[] memo) {
        
        memo[i] = memo[i-1] + memo[i-2] + memo[i-3];
        if (i < n) recursiveTripleStep(n, i+1, memo);
        
    }
    */
    

    // Top down approach with memoization and recursion
    
    /*
    public static void main(String []args){
        int n = 20;
        
        if (n == 0) System.out.println(0);
        int[] memo = new int[n+1];
        
        recursiveTripleStep(n,memo);
        
        System.out.println(memo[n]);
        System.out.println(Arrays.toString(memo));
     }
     
     private static int recursiveTripleStep(int n, int[] memo) {
         
         if(n == 0 || n == 1 || n == 2) return n;
         
         if (memo[n] != 0) return memo[n];
         
         memo[n] = recursiveTripleStep(n-1, memo) + recursiveTripleStep(n-2,memo) + recursiveTripleStep(n-3, memo);
         
         return memo[n];
         
     }
     */
}
