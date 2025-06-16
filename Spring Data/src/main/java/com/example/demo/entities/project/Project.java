package com.example.demo.entities.project;

import com.example.demo.entities.BaseEntity;
import com.example.demo.entities.activity.Activity;
import com.example.demo.entities.client.Client;
import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity(name = "projects")
public class Project extends BaseEntity {

    @Column(nullable = false)
    private String name;

    @OneToMany(mappedBy = "project")
    private List<Client> clients = new ArrayList<>();

    @ManyToMany(mappedBy = "projects")
    private List<Activity> activities = new ArrayList<>();
}
