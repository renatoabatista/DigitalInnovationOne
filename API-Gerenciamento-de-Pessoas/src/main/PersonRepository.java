package one.digitalinnovation.renato-api-gp.repository;

import one.digitalinnovation.renato-api-gp
.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> {
}
