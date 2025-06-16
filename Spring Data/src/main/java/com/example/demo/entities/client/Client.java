package com.example.demo.entities.client;

import com.example.demo.entities.BaseEntity;
import com.example.demo.entities.project.Project;
import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.*;

@Getter
@Setter
@Entity(name = "clients")
public class Client extends BaseEntity {

    @Column(nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "project_id", referencedColumnName = "id")
    private Project project;

}
