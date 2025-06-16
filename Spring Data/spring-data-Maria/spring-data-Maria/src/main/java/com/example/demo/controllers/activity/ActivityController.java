package com.example.demo.controllers.activity;


import com.example.demo.entities.activity.Activity;
import com.example.demo.entities.project.Project;
import com.example.demo.services.activity.ActivityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/activities")
@RequiredArgsConstructor
public class ActivityController {

    private final ActivityService activityService;

    @GetMapping
    public List<Activity> getAll() {
        return activityService.findAll();
    }

    @GetMapping("/{id}")
    public Activity getById(@PathVariable Long id) {
        return activityService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Activity create(@RequestParam String activityNumber) {
        return activityService.create(activityNumber);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        activityService.delete(id);
    }
    @GetMapping("/project-count")
    public int getProjectCountForActivity(@RequestParam String activityNumber) {
        return activityService.countProjectsForActivity(activityNumber);
    }

}

