package com.example.demo.services.activity;

import com.example.demo.entities.activity.Activity;
import com.example.demo.repositories.activity.ActivityRepository;
import com.example.demo.repositories.project.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ActivityService {

    private final ActivityRepository activityRepository;
    private final ProjectRepository projectRepository;

    public List<Activity> findAll() {
        return activityRepository.findAll();
    }

    public Activity findById(Long id) {
        return activityRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Activity not found"));
    }

    public Activity create(String activityNumber) {
        Activity activity = new Activity();
        activity.setActivityNumber(activityNumber);
        return activityRepository.save(activity);
    }

    public void delete(Long id) {
        activityRepository.deleteById(id);
    }
    public int countProjectsForActivity(String activityNumber) {
        Activity activity = activityRepository.findByActivityNumber(activityNumber)
                .orElseThrow(() -> new RuntimeException("Activity not found with number: " + activityNumber));
        return activity.getProjects().size();
    }
}

