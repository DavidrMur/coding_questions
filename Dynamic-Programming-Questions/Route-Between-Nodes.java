public class RouteBetweenNodes {

    static class Graph {
        public Node[] nodes;
    };
    
    static class Node {
        public int value;
        public Node[] neighbours;
        public boolean visited = false;
    };

     public static void main(String []args){
        Node node_0 = new Node();
        node_0.value = 0;
        
        Node node_1 = new Node();
        node_1.value = 1;
        
        Node node_2 = new Node();
        node_2.value = 2;
        
        Node node_3 = new Node();
        node_3.value = 3;
        
        Node node_4 = new Node();
        node_4.value = 4;
        
        Node node_5 = new Node();
        node_5.value = 5;
        
        Node node_6 = new Node();
        node_6.value = 6;
        
        node_0.neighbours = new Node[]{node_1};
        node_1.neighbours = new Node[]{node_2};
        node_2.neighbours = new Node[]{node_0, node_3};
        node_3.neighbours = new Node[]{node_2};
        node_4.neighbours = new Node[]{node_6};
        node_5.neighbours = new Node[]{node_4};
        node_6.neighbours = new Node[]{node_5};
        
        Graph graph = new Graph();
        graph.nodes = new Node[]{node_0, node_1, node_2, node_3, node_4, node_5, node_6};
        
        
        
        
     }
}
