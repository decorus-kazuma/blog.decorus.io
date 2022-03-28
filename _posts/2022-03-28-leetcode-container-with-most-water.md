---
layout: post
title: "Leetcode - Container With Most Water"
date: 2022-03-28 20:26:00 0900
categories:
- Algorithm
- Leetcode
- Two Pointer
series: Leetcode Algorithm - Two Pointer & Sliding Window
series_id: bcdf5b3 
tags:
- series-bcdf5b3-Leetcode-Two-Pointer-Sliding-Window
- Algorithm
- Leetcode
- Two Pointer
---
You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return *the maximum amount of water a container can store*.

**Notice** that you may not slant the container.


## Problem,

| **Difficulty** | _Medium_ |
| **Language** | _Java_ |
| **URL** | https://leetcode.com/problems/container-with-most-water/ |


## Solution,

Two Pointer 로 쉽게 풀 수 있다. 집합의 첫 번째 원소와 마지막 원소를 기준으로 잡고, 더 작은 쪽이 언제나 기준이 된다.

```java
class Solution {
    public int maxArea(int[] height) {
        int left = 0, right = height.length - 1, max = 0;
        while(left < right) {
            int val = Math.min(height[left], height[right]) * (right - left);
            if (val > max) {
                max = val;
            }
            
            if (height[left] > height[right]) {
                --right;
            } else {
                ++left;
            }
        }
        
        return max;
    }
}
```
