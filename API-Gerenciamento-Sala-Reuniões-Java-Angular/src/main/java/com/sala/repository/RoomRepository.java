package com.github.thyagofranco.saladereuniao.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.github.thyagofranco.saladereuniao.model.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {

}
