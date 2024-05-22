package db.lab6.service;

import db.lab6.dto.MemberDTO;
import db.lab6.entity.Member;
import db.lab6.repository.MemberRepository;
import db.lab6.repository.RoleRepository;
import db.lab6.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MemberService {
    private MemberRepository memberRepository;
    private RoleRepository roleRepository;
    private UserRepository userRepository;

    public Member addMember(MemberDTO memberDTO) {
        Member member = new Member();
        member.setRole(
                roleRepository.findById(memberDTO.getRoleId()).orElseThrow(() -> new IllegalArgumentException("Role not found"))
        );
        member.setUser(
                userRepository.findById(memberDTO.getUserId()).orElseThrow(() -> new IllegalArgumentException("User not found"))
        );
        return memberRepository.save(member);
    }

    public Member getMemberById(Long id) {
        return memberRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Member not found"));
    }

    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    public void deleteMember(Long id) {
        memberRepository.deleteById(id);
    }

    public Member updateMember(Long id, MemberDTO memberDTO) {
        Member member = getMemberById(id);
        member.setRole(
                roleRepository.findById(memberDTO.getRoleId()).orElseThrow(() -> new IllegalArgumentException("Role not found"))
        );
        member.setUser(
                userRepository.findById(memberDTO.getUserId()).orElseThrow(() -> new IllegalArgumentException("User not found"))
        );
        return memberRepository.save(member);
    };

    public List<Member> getMembersByRoleId(Long roleId) {
        return memberRepository.findByRoleId(roleId);
    }
}
