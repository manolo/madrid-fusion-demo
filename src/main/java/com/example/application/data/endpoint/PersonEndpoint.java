package com.example.application.data.endpoint;

import java.util.List;

import com.example.application.data.entity.Person;
import com.example.application.data.service.PersonRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.fusion.Endpoint;
import com.vaadin.fusion.Nonnull;

import org.springframework.lang.NonNull;

@Endpoint
@AnonymousAllowed
public class PersonEndpoint {

  private final PersonRepository repo;

  public PersonEndpoint(PersonRepository repo) {
    this.repo = repo;
  }

  @Nonnull
  public List<@Nonnull Person> findAll() {
    return repo.findAll();
  }

  @NonNull
  public Person save(@NonNull Person p) {
    return repo.save(p);
  }

}
