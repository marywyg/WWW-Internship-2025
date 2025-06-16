package com.example.demo.services.client;

import com.example.demo.dtos.client.ClientDTO;
import com.example.demo.entities.client.Client;
import com.example.demo.entities.project.Project;
import com.example.demo.repositories.client.ClientRepository;
import com.example.demo.services.project.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityNotFoundException;
import java.util.Optional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Service
public class ClientService {

    private final ClientRepository clientRepository;
    private final ProjectService projectService;

    public Page<ClientDTO> findAll(Pageable pageable) {
        final Page<Client> clients = clientRepository.findAll(pageable);
        return clients.map(client -> new ClientDTO(
                client.getId(),
                client.getName(),
                Optional.ofNullable(client.getProject())
                        .map(Project::getId)
                        .orElse(null)
        ));
    }

    public Client findById(long id) {
        return clientRepository.findById(id)
                .orElseThrow(EntityNotFoundException::new);
    }

    @Transactional
    public Client create(ClientDTO dto) {
        final Client client = new Client();
        final Project project = projectService.findById(dto.getProjectId());
        client.setName(dto.getName());
        client.setProject(project);
        return clientRepository.save(client);
    }

    @Transactional
    public Client update(long id, ClientDTO dto) {
        final Client client = findById(id);
        final Project project = projectService.findById(dto.getProjectId());
        client.setName(dto.getName());
        client.setProject(project);
        return clientRepository.save(client);
    }

    public long count() {
        return clientRepository.count();
    }

    @Transactional
    public void delete(long id) {
        clientRepository.deleteById(id);
    }
}
