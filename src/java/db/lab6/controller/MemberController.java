package db.lab6.controller;

import db.lab6.dto.MemberDTO;
import db.lab6.entity.Member;
import db.lab6.service.MemberService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/member")
@AllArgsConstructor
public class MemberController {
    private MemberService memberService;

    @PostMapping("/add")
    public Member addMember(@RequestBody MemberDTO memberDTO) {
        Member member = memberService.addMember(memberDTO);
        return member;
    }

    @GetMapping("/get/{id}")
    public Member getMemberById(@PathVariable Long id) {
        Member member = memberService.getMemberById(id);
        return member;
    }

    @GetMapping("/get/all")
    public List<Member> getAllGrants() {
        return memberService.getAllMembers();
    }

    @GetMapping("/get/by_role/{id}")
    public List<Member> getMembersByRoleId(@PathVariable Long id) {
        return memberService.getMembersByRoleId(id);
    }

    @PutMapping("/update/{id}")
    public Member updateMember(@PathVariable Long id, @RequestBody MemberDTO memberDTO) {
        Member member = memberService.updateMember(id, memberDTO);
        return member;
    }

    @DeleteMapping("/delete/{id}")
    public String deleteMember(@PathVariable Long id) {
        memberService.deleteMember(id);
        return "Member deleted";
    }
}
