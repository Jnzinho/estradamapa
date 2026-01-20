import {
  BubbleChatIcon,
  ArrowDataTransferDiagonalIcon,
  ChartLineData03Icon,
  CodeIcon,
  DatabaseIcon,
  FlowIcon,
  GridIcon,
  LayersIcon,
  Link01Icon,
  MazeIcon,
  Search01Icon,
  SortingIcon,
  StructureFolderIcon,
  TreeIcon,
} from '@hugeicons/core-free-icons';
import { RoadmapStep } from '@/lib/types';

export const roadmapData: RoadmapStep[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Course overview, why learn algorithms, and setup.',
    status: 'pending',
    icon: CodeIcon,
    details:
      'ThePrimeagen introduces the course by discussing some personal background with algorithms, types of algorithms that will be covered, and suggestions for retaining the information presented in this course. Reasons to learn algorithms, why this course uses TypeScript, and ThePrimeagen\'s social media links are also provided.',
    resources: [
      {
        title: 'Introduction (00:00:00 - 00:07:49)',
        url: 'https://frontendmasters.com/courses/algorithms/introduction/',
      },
    ],
  },
  {
    id: 'basics',
    title: 'Basics',
    description: 'Big O time complexity and arrays data structure.',
    status: 'pending',
    icon: ChartLineData03Icon,
    details:
      'Learn about Big O notation - what it is, why it\'s used, and essential concepts. Understand arrays as fixed size, contiguous memory chunks by walking through array positions in an array buffer. Operations that can be performed on an array are also demonstrated.',
    resources: [
      {
        title: 'Big O Time Complexity (00:07:50 - 00:20:31)',
        url: 'https://frontendmasters.com/courses/algorithms/big-o-time-complexity/',
      },
      {
        title: 'Arrays Data Structure (00:20:32 - 00:33:59)',
        url: 'https://frontendmasters.com/courses/algorithms/arrays-data-structure/',
      },
      {
        title: 'Arrays Q&A (00:34:00 - 00:37:18)',
        url: 'https://frontendmasters.com/courses/algorithms/arrays-q-a/',
      },
    ],
  },
  {
    id: 'search',
    title: 'Search',
    description: 'Linear search, binary search, and the two crystal balls problem.',
    status: 'pending',
    icon: Search01Icon,
    details:
      'Learn searching algorithms including linear search for simple array traversal, and binary search for efficient searching in sorted lists. Also covers the famous "Two Crystal Balls" interview problem - determining the exact breaking point using optimized search techniques.',
    resources: [
      {
        title: 'Linear Search & Kata Setup (00:37:19 - 00:44:38)',
        url: 'https://frontendmasters.com/courses/algorithms/linear-search-kata-setup/',
      },
      {
        title: 'Binary Search Algorithm (00:44:39 - 00:52:51)',
        url: 'https://frontendmasters.com/courses/algorithms/binary-search-algorithm/',
      },
      {
        title: 'Pseudo Code Binary Search (00:52:52 - 00:59:12)',
        url: 'https://frontendmasters.com/courses/algorithms/pseudo-code-binary-search/',
      },
      {
        title: 'Implementing Binary Search (00:59:13 - 01:03:52)',
        url: 'https://frontendmasters.com/courses/algorithms/implementing-binary-search/',
      },
      {
        title: 'Two Crystal Balls Problem (01:03:53 - 01:09:38)',
        url: 'https://frontendmasters.com/courses/algorithms/two-crystal-balls-problem/',
      },
      {
        title: 'Implementing Two Crystal Balls (01:09:39 - 01:16:37)',
        url: 'https://frontendmasters.com/courses/algorithms/implementing-two-crystal-balls/',
      },
    ],
  },
  {
    id: 'sort',
    title: 'Sort',
    description: 'Bubble sort, linked lists, queues, and stacks.',
    status: 'pending',
    icon: SortingIcon,
    details:
      'Learn fundamental sorting with bubble sort, then dive into linked list data structures including implementation of deletion and insertion. Understand queues (FIFO) and stacks (LIFO) - their functions, use cases, and implementations.',
    resources: [
      {
        title: 'Bubble Sort (01:16:38 - 01:25:18)',
        url: 'https://frontendmasters.com/courses/algorithms/bubble-sort/',
      },
      {
        title: 'Implementing Bubble Sort (01:25:19 - 01:34:44)',
        url: 'https://frontendmasters.com/courses/algorithms/implementing-bubble-sort/',
      },
      {
        title: 'Linked List Data Structures (01:34:45 - 01:49:31)',
        url: 'https://frontendmasters.com/courses/algorithms/linked-list-data-structures/',
      },
      {
        title: 'Linked List Complexity (01:49:32 - 01:54:28)',
        url: 'https://frontendmasters.com/courses/algorithms/linked-list-complexity/',
      },
      {
        title: 'Queue (01:54:29 - 02:00:18)',
        url: 'https://frontendmasters.com/courses/algorithms/queue/',
      },
      {
        title: 'Implementing a Queue (02:00:19 - 02:07:40)',
        url: 'https://frontendmasters.com/courses/algorithms/implementing-a-queue/',
      },
      {
        title: 'Queue Q&A (02:07:41 - 02:11:10)',
        url: 'https://frontendmasters.com/courses/algorithms/queue-q-a/',
      },
      {
        title: 'Stack (02:11:11 - 02:15:53)',
        url: 'https://frontendmasters.com/courses/algorithms/stack/',
      },
      {
        title: 'Implementing a Stack (02:15:54 - 02:23:45)',
        url: 'https://frontendmasters.com/courses/algorithms/implementing-a-stack/',
      },
    ],
  },
  {
    id: 'arrays',
    title: 'Arrays',
    description: 'Arrays vs linked lists, ArrayList, and RingBuffer.',
    status: 'pending',
    icon: GridIcon,
    details:
      'Deep dive into array data structures. Compare arrays and linked lists - their similarities and differences. Learn ArrayList operations (get, push, pop) and RingBuffer for fixed-length raw binary data buffers. Includes empirical tests to understand what data structure JavaScript uses under the hood.',
    resources: [
      {
        title: 'Arrays vs Linked List (02:23:46 - 02:29:54)',
        url: 'https://frontendmasters.com/courses/algorithms/arrays-vs-linked-list/',
      },
      {
        title: 'ArrayList (02:29:55 - 02:41:40)',
        url: 'https://frontendmasters.com/courses/algorithms/arraylist/',
      },
      {
        title: 'RingBuffer (02:41:41 - 02:48:41)',
        url: 'https://frontendmasters.com/courses/algorithms/ringbuffer/',
      },
      {
        title: 'Data Structures Q&A (02:48:42 - 03:03:30)',
        url: 'https://frontendmasters.com/courses/algorithms/data-structures-q-a/',
      },
    ],
  },
  {
    id: 'recursion',
    title: 'Recursion',
    description: 'Recursion fundamentals and path finding algorithms.',
    status: 'pending',
    icon: MazeIcon,
    details:
      'Understand recursion as a function that calls itself until it reaches the base case. Learn the three steps of recursion: pre, recurse, and post. Apply recursion to practical problems like pathfinding through a maze with base case and recursive case implementations.',
    resources: [
      {
        title: 'Recursion (03:03:31 - 03:16:52)',
        url: 'https://frontendmasters.com/courses/algorithms/recursion/',
      },
      {
        title: 'Path Finding: Base Case (03:16:53 - 03:29:25)',
        url: 'https://frontendmasters.com/courses/algorithms/path-finding-base-case/',
      },
      {
        title: 'Path Finding: Recursive Case (03:29:26 - 03:41:44)',
        url: 'https://frontendmasters.com/courses/algorithms/path-finding-recursive-case/',
      },
      {
        title: 'Recursion Q&A (03:41:45 - 03:50:57)',
        url: 'https://frontendmasters.com/courses/algorithms/recursion-q-a/',
      },
    ],
  },
  {
    id: 'quick-sort',
    title: 'Quick Sort',
    description: 'QuickSort algorithm using divide and conquer.',
    status: 'pending',
    icon: ArrowDataTransferDiagonalIcon,
    details:
      'Learn the QuickSort algorithm - a divide and conquer technique that picks a pivot element and rearranges the array so elements smaller than the pivot move to the left and elements greater move to the right. The algorithm then recursively sorts the subarrays.',
    resources: [
      {
        title: 'QuickSort Algorithm (03:50:58 - 04:04:45)',
        url: 'https://frontendmasters.com/courses/algorithms/quicksort-algorithm/',
      },
      {
        title: 'Implementing QuickSort (04:04:46 - 04:20:42)',
        url: 'https://frontendmasters.com/courses/algorithms/implementing-quicksort/',
      },
    ],
  },
  {
    id: 'doubly-linked-list',
    title: 'Doubly Linked List',
    description: 'Implementing a complete doubly linked list.',
    status: 'pending',
    icon: Link01Icon,
    details:
      'Build a complete doubly linked list implementation including prepend, insertAt, append, remove, get, and removeAt operations. Learn debugging techniques for linked list operations and proper handling of edge cases.',
    resources: [
      {
        title: 'Linked List: prepend, insertAt, & append (04:20:43 - 04:33:20)',
        url: 'https://frontendmasters.com/courses/algorithms/linked-list-prepend-insertat-append/',
      },
      {
        title: 'Linked List: remove, get, & removeAt (04:33:21 - 04:46:34)',
        url: 'https://frontendmasters.com/courses/algorithms/linked-list-remove-get-removeat/',
      },
      {
        title: 'Linked List Q&A (04:46:35 - 04:50:38)',
        url: 'https://frontendmasters.com/courses/algorithms/linked-list-q-a/',
      },
      {
        title: 'Debugging Linked List (04:50:39 - 04:56:38)',
        url: 'https://frontendmasters.com/courses/algorithms/debugging-linked-list/',
      },
    ],
  },
  {
    id: 'trees',
    title: 'Trees',
    description: 'Tree overview and traversal methods.',
    status: 'pending',
    icon: TreeIcon,
    details:
      'Learn about tree data structures - a structure consisting of one node (root) and zero or more subtrees. Understand tree terminology and master the three types of traversals: preorder (visit, then traverse subtrees), inorder (traverse one subtree, visit, traverse other), and postorder (traverse both subtrees, then visit).',
    resources: [
      {
        title: 'Trees Overview (04:56:39 - 05:04:34)',
        url: 'https://frontendmasters.com/courses/algorithms/trees-overview/',
      },
      {
        title: 'Tree Traversals (05:04:35 - 05:14:01)',
        url: 'https://frontendmasters.com/courses/algorithms/tree-traversals/',
      },
      {
        title: 'Implement Tree Traversal (05:14:02 - 05:29:00)',
        url: 'https://frontendmasters.com/courses/algorithms/implement-tree-traversal/',
      },
    ],
  },
  {
    id: 'tree-search',
    title: 'Tree Search',
    description: 'BFS, DFS, and binary search trees.',
    status: 'pending',
    icon: StructureFolderIcon,
    details:
      'Master tree searching algorithms including Breadth-First Search (BFS) using queues and Depth-First Search (DFS). Learn to compare binary trees, understand when to use each search type (DFS preserves tree shape, BFS does not), and implement binary search trees with find, insert, and delete operations.',
    resources: [
      {
        title: 'Breadth-First Search (05:29:01 - 05:35:24)',
        url: 'https://frontendmasters.com/courses/algorithms/breadth-first-search/',
      },
      {
        title: 'Implement Breadth-First Search (05:35:25 - 05:43:02)',
        url: 'https://frontendmasters.com/courses/algorithms/implement-breadth-first-search/',
      },
      {
        title: 'Search Practice (05:43:03 - 05:47:23)',
        url: 'https://frontendmasters.com/courses/algorithms/search-practice/',
      },
      {
        title: 'Implement Binary Tree Comparison (05:47:24 - 05:55:29)',
        url: 'https://frontendmasters.com/courses/algorithms/implement-binary-tree-comparison/',
      },
      {
        title: 'Depth-First: Find (05:55:30 - 06:05:20)',
        url: 'https://frontendmasters.com/courses/algorithms/depth-first-find/',
      },
      {
        title: 'Depth-First: Insert (06:05:21 - 06:13:20)',
        url: 'https://frontendmasters.com/courses/algorithms/depth-first-insert/',
      },
      {
        title: 'Depth-First: Delete (06:13:21 - 06:20:13)',
        url: 'https://frontendmasters.com/courses/algorithms/depth-first-delete/',
      },
      {
        title: 'Binary Search Tree Q&A (06:20:14 - 06:24:20)',
        url: 'https://frontendmasters.com/courses/algorithms/binary-search-tree-q-a/',
      },
      {
        title: 'Implement Depth-First Search (06:24:21 - 06:29:12)',
        url: 'https://frontendmasters.com/courses/algorithms/implement-depth-first-search/',
      },
    ],
  },
  {
    id: 'heap',
    title: 'Heap',
    description: 'Heap data structure and tries.',
    status: 'pending',
    icon: LayersIcon,
    details:
      'Learn about heaps - binary trees where every child and grandchild is smaller (MinHeap) or larger (MaxHeap) than the current node. Implement a MinHeap with insert and delete methods using JavaScript arrays. Also learn about tries (prefix trees) for autocomplete functionality with insertion and deletion operations.',
    resources: [
      {
        title: 'Heap (06:29:13 - 06:45:03)',
        url: 'https://frontendmasters.com/courses/algorithms/heap/',
      },
      {
        title: 'Implementing Heap (06:45:04 - 07:04:11)',
        url: 'https://frontendmasters.com/courses/algorithms/implementing-heap/',
      },
      {
        title: 'Tries (07:04:12 - 07:18:39)',
        url: 'https://frontendmasters.com/courses/algorithms/tries/',
      },
    ],
  },
  {
    id: 'graphs',
    title: 'Graphs',
    description: 'Graph theory, BFS/DFS on graphs, and Dijkstra\'s algorithm.',
    status: 'pending',
    icon: FlowIcon,
    details:
      'Master graph data structures - series of nodes with connections. Learn graph terminology (cycle, acyclic, connected, directed, undirected, weighted, DAG, node, edge). Implement BFS on adjacency matrix and DFS on adjacency list. Learn Dijkstra\'s shortest path algorithm and its running time analysis.',
    resources: [
      {
        title: 'Graphs Overview (07:18:40 - 07:26:11)',
        url: 'https://frontendmasters.com/courses/algorithms/graphs-overview/',
      },
      {
        title: 'Searching an Adjacency Matrix (07:26:12 - 07:39:19)',
        url: 'https://frontendmasters.com/courses/algorithms/searching-an-adjacency-matrix/',
      },
      {
        title: 'Implementing BFS on Adjacency Matrix (07:39:20 - 07:47:48)',
        url: 'https://frontendmasters.com/courses/algorithms/implementing-bfs-on-adjacency-matrix/',
      },
      {
        title: 'Implement DFS on Adjacency List (07:47:49 - 07:59:23)',
        url: 'https://frontendmasters.com/courses/algorithms/implement-dfs-on-adjacency-list/',
      },
      {
        title: 'Dijkstra\'s Shortest Path (07:59:24 - 08:11:58)',
        url: 'https://frontendmasters.com/courses/algorithms/dijkstras-shortest-path/',
      },
      {
        title: 'Implement Dijkstra\'s Shortest Path (08:11:59 - 08:24:02)',
        url: 'https://frontendmasters.com/courses/algorithms/implement-dijkstras-shortest-path/',
      },
      {
        title: 'Dijkstra\'s Shortest Path Run Time (08:24:03 - 08:33:21)',
        url: 'https://frontendmasters.com/courses/algorithms/dijkstras-shortest-path-run-time/',
      },
    ],
  },
  {
    id: 'maps-lru',
    title: 'Maps & LRU',
    description: 'Maps, hash tables, and LRU cache implementation.',
    status: 'pending',
    icon: DatabaseIcon,
    details:
      'Learn about map data structures including terminology like load factor, key-value pairs, and collision handling. Implement an LRU (Least Recently Used) cache - a data structure combining map and linked list that evicts the least recently used item when full.',
    resources: [
      {
        title: 'Maps (08:33:22 - 08:45:03)',
        url: 'https://frontendmasters.com/courses/algorithms/maps/',
      },
      {
        title: 'LRU Cache (08:45:04 - 08:55:41)',
        url: 'https://frontendmasters.com/courses/algorithms/lru-cache/',
      },
      {
        title: 'LRU Cache Setup (08:55:42 - 08:59:18)',
        url: 'https://frontendmasters.com/courses/algorithms/lru-cache-setup/',
      },
      {
        title: 'Implementing an LRU Cache (08:59:19 - 09:17:50)',
        url: 'https://frontendmasters.com/courses/algorithms/implementing-an-lru-cache/',
      },
    ],
  },
  {
    id: 'wrapping-up',
    title: 'Wrapping Up',
    description: 'Course conclusion and next steps.',
    status: 'pending',
    icon: BubbleChatIcon,
    details:
      'ThePrimeagen wraps up the course with a brief overview of all material covered and directions on what to explore next. Includes heartfelt encouragement to utilize opportunities and continue learning.',
    resources: [
      {
        title: 'Wrapping Up (09:17:51 - 09:21:18)',
        url: 'https://frontendmasters.com/courses/algorithms/wrapping-up/',
      },
    ],
  },
];
