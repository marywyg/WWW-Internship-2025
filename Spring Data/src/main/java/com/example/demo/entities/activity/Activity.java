package com.example.demo.entities.activity;

import com.example.demo.entities.BaseEntity;
import com.example.demo.entities.project.Project;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity(name = "activity")
public class Activity extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String activityNumber;

    @ManyToMany
    @JoinTable(
            name = "project_activity",
            joinColumns = @JoinColumn(name = "activity_id"),
            inverseJoinColumns = @JoinColumn(name = "project_id")
    )
    private List<Project> projects = new ArrayList<>();
}
