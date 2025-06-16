package com.example.demo.dtos.activity;

import com.example.demo.entities.project.Project;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Data
public class ActivityDTO {

    private Long id;

    @NotNull
    private String activityNumber;

    private List<Project> projectId;
}
