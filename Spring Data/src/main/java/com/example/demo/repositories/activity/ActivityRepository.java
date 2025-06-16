package com.example.demo.repositories.activity;

import com.example.demo.entities.activity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
    Optional<Activity> findByActivityNumber(String activityNumber);
}


