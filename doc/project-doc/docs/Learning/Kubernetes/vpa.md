---
sidebar_position: 1
---

In kubernetes, a verticalPodAutoscaler automatically update a workload management resource (deploymenet, statefulset), with tha aim of automatically adjust `requests and limits` to match actual usage.(The workload updated vertically -> more cpu or memory assigned instead of the horizontal scaling -> more pod created). 
If the resource usage decreased, and the pod resource requests are above optimal level, -> vpa instruct the workload to adjust resource requests back down.
Vpa controller running on kubernetes data plane.

Vpa consost of 3 main components:
- recommender (analyzes resource usage and provides recommendations)
- updater (update Pod resource requests either by evicting Pods or modifying them in place)
- vpa admission controller (which applies resource recommendations to new or recreated Pods)

[link](https://kubernetes.io/docs/concepts/workloads/autoscaling/vertical-pod-autoscale/)