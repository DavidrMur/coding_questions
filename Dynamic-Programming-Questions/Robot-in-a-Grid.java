import java.util.Arrays;
import java.util.Stack;

public class RobotInAGrid{

    // Top down approach with recursion and pseudo memoization - starting at end position
     /*
     public static void main(String []args){
        int[][] map = {
            {1,0,1,0},
            {1,1,0,1},
            {1,1,1,1},
            {1,1,1,1}
        };
        
        int r = 4;
        int c = 4;
        
        for(int q = 0; q < map.length; q++) {
            System.out.println(Arrays.toString(map[q]));
        }
        
        
        Stack ans = new Stack();
        
        recursiveRobotGrid(map, r-1, c-1, ans);
        
        while(!ans.empty()) {
            System.out.print(ans.pop() + " ");
        }
        
        System.out.println();
        
        for(int q = 0; q < map.length; q++) {
            System.out.println(Arrays.toString(map[q]));
        }
        
     }
     
     private static void recursiveRobotGrid(int[][] map, int posR, int posC, Stack ans) {
         if (posR != 0 || posC != 0) {
             if (posR > 0 && map[posR-1][posC] != 0) { // move up if possible
                 System.out.println("up");
                 ans.push("down");
                 recursiveRobotGrid(map, posR-1, posC, ans);
             }
             else if (posC > 0 && map[posR][posC-1] != 0) { // move left if possible
                System.out.println("left");
                ans.push("right");
                recursiveRobotGrid(map, posR, posC-1, ans);
             } else { // dead end, route is not possible, mark as such and move backwards
                System.out.println("Dead end");
                map[posR][posC] = 0;
                ans.pop();
                recursiveRobotGrid(map, posR+1, posC, ans);
             }
             
         }
     }
     */
     
     
     // Bottom up approach with recursion 
     /*
     public static void main(String []args){
        int[][] map = {
            {1,0,1,0},
            {1,1,0,1},
            {1,1,1,1},
            {0,1,1,1}
        };
        
        int r = 4;
        int c = 4;
        
        for(int q = 0; q < map.length; q++) {
            System.out.println(Arrays.toString(map[q]));
        }
        
        
        Stack ans = new Stack();
        Stack temp = new Stack();
        
        recursiveRobotGrid(map, r, c, 0, 0, ans);
        
        while(!ans.empty()) {
            temp.push(ans.pop());
        }
        
        while(!temp.empty()){
            System.out.print(temp.pop() + " ");
        }
        
        System.out.println();
        
        for(int q = 0; q < map.length; q++) {
            System.out.println(Arrays.toString(map[q]));
        }
        
     }
     
     private static void recursiveRobotGrid(int[][] map, int r, int c, int posR, int posC, Stack ans) {
         if (posR != r-1 || posC != c-1) {
             if (posR < r-1 && map[posR+1][posC] != 0) { // move up if possible
                 System.out.println("down");
                 ans.push("down");
                 recursiveRobotGrid(map,r, c, posR+1, posC, ans);
             }
             else if (posC < c-1 && map[posR][posC+1] != 0) { // move left if possible
                System.out.println("right");
                ans.push("right");
                recursiveRobotGrid(map,r, c, posR, posC+1, ans);
             } else { // dead end, route is not possible, mark as such and move backwards
                System.out.println("Dead end");
                map[posR][posC] = 0;
                ans.pop();
                recursiveRobotGrid(map, r, c,  posR-1, posC, ans);
             }
             
         }
     }
     */
     
}
