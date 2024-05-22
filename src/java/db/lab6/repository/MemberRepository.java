package db.lab6.repository;

import db.lab6.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member, Long> {
    List<Member> findByRoleId(Long roleId);
}
