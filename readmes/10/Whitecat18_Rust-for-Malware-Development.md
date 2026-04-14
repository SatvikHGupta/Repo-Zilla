
# Rust for Malware Development

<div align="center">
  <img width="350px" src="https://user-images.githubusercontent.com/797/46922345-99723480-cfbc-11e8-8f2d-18eec8f18ad5.png" alt="Rust for Malware Development Logo" />
  <h3><a href="https://github.com/Whitecat18/Rust-for-Malware-Development">Rust for Malware Development</a></h3>
  <p><b>This repository contains source codes of various techniques used by malware authors, red teamers, threat actors, state-sponsored hacking groups etc. These techniques are well-researched and implemented in Rust.</b></p>
  <br>
  <img src="https://img.shields.io/badge/Language-Rust-orange" alt="Language: Rust" />
  <img src="https://img.shields.io/badge/OS-Windows-blue" alt="OS: Windows" />
  <img src="https://img.shields.io/badge/Maintained-Yes-green" alt="Maintained: Yes" />
  <a href="https://zread.ai/Whitecat18/Rust-for-Malware-Development" target="_blank"><img src="https://img.shields.io/badge/Ask_Zread-_.svg?style=flat&color=00b0aa&labelColor=000000&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTYxNTYgMS42MDAxSDIuMjQxNTZDMS44ODgxIDEuNjAwMSAxLjYwMTU2IDEuODg2NjQgMS42MDE1NiAyLjI0MDFWNC45NjAxQzEuNjAxNTYgNS4zMTM1NiAxLjg4ODEgNS42MDAxIDIuMjQxNTYgNS42MDAxSDQuOTYxNTZDNS4zMTUwMiA1LjYwMDEgNS42MDE1NiA1LjMxMzU2IDUuNjAxNTYgNC45NjAxVjIuMjQwMUM1LjYwMTU2IDEuODg2NjQgNS4zMTUwMiAxLjYwMDEgNC45NjE1NiAxLjYwMDFaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00Ljk2MTU2IDEwLjM5OTlIMi4yNDE1NkMxLjg4ODEgMTAuMzk5OSAxLjYwMTU2IDEwLjY4NjQgMS42MDE1NiAxMS4wMzk5VjEzLjc1OTlDMS42MDE1NiAxNC4xMTM0IDEuODg4MSAxNC4zOTk5IDIuMjQxNTYgMTQuMzk5OUg0Ljk2MTU2QzUuMzE1MDIgMTQuMzk5OSA1LjYwMTU2IDE0LjExMzQgNS42MDE1NiAxMy43NTk5VjExLjAzOTlDNS42MDE1NiAxMC42ODY0IDUuMzE1MDIgMTAuMzk5OSA0Ljk2MTU2IDEwLjM5OTlaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik0xMy43NTg0IDEuNjAwMUgxMS4wMzg0QzEwLjY4NSAxLjYwMDEgMTAuMzk4NCAxLjg4NjY0IDEwLjM5ODQgMi4yNDAxVjQuOTYwMUMxMC4zOTg0IDUuMzEzNTYgMTAuNjg1IDUuNjAwMSAxMS4wMzg0IDUuNjAwMUgxMy43NTg0QzE0LjExMTkgNS42MDAxIDE0LjM5ODQgNS4zMTM1NiAxNC4zOTg0IDQuOTYwMVYyLjI0MDFDMTQuMzk4NCAxLjg4NjY0IDE0LjExMTkgMS42MDAxIDEzLjc1ODQgMS42MDAxWiIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBkPSJNNCAxMkwxMiA0TDQgMTJaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00IDEyTDEyIDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K&logoColor=ffffff" alt="zread"/></a>

</div>

---

## Table of Contents
- [CodeBase](https://github.com/Whitecat18/Rust-for-Malware-Development)
- [Walkthrough](#walkthrough)
- [Malware Techniques](#malware-techniques)
- [Encryption Techniques](#encryption-techniques)
- [Related Blogs](#related-blogs)
- [Download Repository](#download-as-zip-file)
- [Contribution](#contributing-to-rust-for-malware-development)
- [Credits/References](#Credits-/-References)

## Malware Techniques

| Technique | Description |
|-----------|-------------|
| [Process Injection](Process-Injection) | Process injection techniques |
| [Process Injection 2](Process) | Additional process injection snippets. |
| [Process Ghosting](GhostingProcess) | Process ghosting technique |
| [Process Hypnosis](Process/hypnosis.rs) | Process hypnosis techniques |
| [Process Herpaderping](Process/Herpaderping) | Process herpaderping |
| [Parent Process Spoofing](Persistence/PPid_spoofing/) | create a process that appeas as it was spawn a parent process | 
| [Waiting Thread Hijacking](WaitingThreadHijacking) | injection by overwriting the return address of a waiting thread |
| [NtCreateUserProcess](NtCreateUserProcess) | Launch processes using NtCreateUserProcess API. |
| [Dirty Vanity](Dirty_Vanity/) | Bypass EDR's by executing Shellcode by forking the process |
| [Custom Shellcode](https://github.com/Whitecat18/Rust-for-Malware-Development/tree/main/Custom_Shellcode) | Custom Shellcode for Testing. | 
| [Tartarus Gate](syscalls/TartarusGate) | Bypass EDRs by unhooking functions | 
| [Recycle Gate](syscalls/RecycledGate) | Combination of Hells, Halos, Tartarus Gate | 
| [Named Pipes](Named_Pipe) | Interprocess communication using named pipes on Windows. |
| [Api Hooking](Api_Hooking) | API Hooking Using Trampoline. | 
| [PE Analyzer](https://github.com/Whitecat18/PE-Analyzer.rs) | Extract PE information via CLI. |
| [PEB Offset Finder](PEB_Offset_finder) | Find PEB Offsets for sstealth operations | 
| [BlockHandle](BlockHandle) | Block handles using SDDL PoC. |
| [Dynamic Export Table PEB](base_addr_locator) | Call Windows functions by searching memory. |
| [Dynamic Resolver](https://github.com/Whitecat18/Rust-for-Malware-Development/tree/main/Dynamic_Resolver) | Dynamically resolves and invokes WinAPI functions |  
| [API Hammering](api_hammering) | API hammering techniques. |
| [Early Cascade Injection](Early%20Cascade%20Injection) | Early-cascade injection PoC in Rust. |
| [Encryption Methods](Encryption%20Methods) | Methods to encrypt and execute payloads. |
| [Enumeration](Enumeration) | Enumeration modules for efficiency. |
| [Malware Samples](Malware-Samples) | Malware based on real-world activities. |
| [Metadata Modification](Metadata_Modification) | Extract and embed custom metadata in binaries. |
| [Keyloggers](https://github.com/Whitecat18/Rust-for-Malware-Development/tree/main/Keyloggers) | Custom keylogger implementations in Rust. |
| [DLL Injection](dll_injection) | DLL injection in Rust. |
| [DLL Injector](DLL_Injector) | Versatile DLL injector in Rust. |
| [Code Snippets](Malware_Tips) | Snippets for malware operations. |
| [NTAPI Implementation](NtApi) | NTAPI usage snippets. |
| [Early Expcetion Handler](KiUserExceptionDispatcherStepOver) | Custom Expcetion Handler to bypass EDRs | 
| [Extract WiFi Passwords](Recon/extract_wifi) | Extract stored WiFi passwords on Windows. |
| [Reverse Shell](Reverse%20Shell) | Client-server reverse shell in Rust. |
| [Thread Hijacking](Threads) | Thread hijacking snippets. |
| [Self Deletion](Self-Deletion-Techniques) | Techniques for self-deleting binaries. |
| [Position Independent Series](position%20independent) | Position-independent code in Rust. |
| [Shellcode Execution](shellcode_exec) | Shellcode execution using WinAPIs. |
| [Sleep Obfuscation](Sleep_Obfuscations/Ekko) | Sleep obfuscation implementation. |
| [Direct Syscalls](syscalls/direct_syscalls) | Direct syscall implementation using STUB methods. |
| [Indirect Syscalls](syscalls/indirect_syscalls) | Indirect syscall implementation using STUB methods. |
| [Parallel Syscalls](syscalls/parallel_syscalls/) | Parallel Syscall implementation. |
| [BSOD](BSOD) | Triggers a Blue Screen of Death. |
| [Persistence](Persistence) | Persistence techniques. |
| [UAC Bypass CMSTP](uac-bypass-cmstp) | UAC bypass by elevating CMSTP.exe. |
| [Malware DSA](shellcode_exec/DSA_Exec) | Malware using data structures and algorithms. |
| [Shellcode Obfuscation](obfuscation) | Obfuscate shellcode using IPv4, IPv6, MAC, UUID formats. |
| [EDR Checker](EDRChecker) | Detect EDR tools, AV software, and security applications. |
| [Timer](timer) | Time-based execution control mechanism. |
| [Keylogger Dropper](keylog_dropper) | Downloads and executes keylogger in the background. |
| [Rand_Fill](Malware_Tips/rand_fill) | Deletes files and fills disk with random bytes. |
| [Encryfer-X](Malware-Samples/Encryfer/Encryfer-X) | Ransomware combining multiple PoC techniques. |
| [GitHub Stealers](stealer/GitHub_API) | Steal credentials using GitHub API. |
| [Telegram Operator](stealer/Telegram%20Operator/) | Telegram Operator to Run EXEs and executes Commands | 
| [AMSI Byapss Techniques](AMSI%20BYPASS) | AMSI Bypass Techniques. | 
| [ManulaRsrcDataFetching](ManualRsrcDataFetching) | function to replace FindResource & LoadResource & LockResource & SizeofResource windows apis. |
| [Anti-VM CPU Fan Detection](Evasion/CPU_FAN_DETECTION) | Find if the system has CPU FAN. Works only on PC. | 
| [Proxy DLL Load](https://github.com/Whitecat18/Rust-for-Malware-Development/tree/main/Proxy-DLL-Loads) | PoC of Proxying DLL Loads To Hide From ETWTI Stack Tracing | 
| [Anti Debugging](./AntiDebugging/) | Anti-Debugging Methods |
| [ETW](./Etw/) | Etw Methods |
| [Debug Library](./Debug/) | Simple Debug code to print statements during debug builds only |

## Encryption Techniques

| Technique | Description |
|-----------|-------------|
| [AES Encryption](Encryption%20Methods/Aes_Encryption) | Encrypt/decrypt shellcodes using AES. |
| [RC4 Encryption](Encryption%20Methods/rc4_shellcode_encrypt.rs) | Encrypt/decrypt shellcodes using RC4. |
| [XOR Encryption](Encryption%20Methods/xor_encrypt.rs) | Encrypt/decrypt shellcodes using XOR. |
| [Khufu Encryption](Encryption%20Methods/Khufu_encryption) | Encrypt/decrypt using Khufu algorithm. |
| [ECC Encryption](Encryption%20Methods/ecc_shellcode_exec) | Encrypt/decrypt shellcodes using ECC. |
| [Camellia Cipher](Encryption%20Methods/camellia_cipher) | Encryption using Camellia cipher. |
| [NullxFigure](Encryption%20Methods/nullxfigure) | Parse null bytes into shellcode. |
| [A5/1 Cipher](Encryption%20Methods) | Encrypt shellcode using modified A5/1 cipher. |
| [Madryga Algorithm](Encryption%20Methods/Madryga_encryption) | Encrypt/decrypt shellcodes using Madryga Algorithm. |
| [Lucifer Algorithm](Encryption%20Methods/lucifer_algorithm.rs) | Encrypt/decrypt shellcodes using Lucifer algorithm. |
| [DFC Algorithm](Encryption%20Methods/dfc_algorithm.rs) | Encrypt/execute payloads using DFC algorithm. |
| [Payload Shuffling](Encryption%20Methods/payload_shuffling) | Payload shuffling techniques. |
| [SystemFunction032/033](Encryption%20Methods/SystemFunction032_033) | Encrypt/decrypt shellcode using undocumented WinAPI. |

## Custom Crates

|    Name   | Description |
|-----------|-------------|
| [Static Encrypt](https://github.com/Whitecat18/static_encrypt) | Encrypt String literals at compile time using Different Algorithms | 
| [Dynamic API Parsing](https://github.com/Whitecat18/apiparser) | Parses PEB to locate ntdll.dll exports at runtime and resolves API using hashes. | 
| [LazyDLLSideload](https://github.com/Whitecat18/LazyDLLSideload.git) | Generate DLL proxy/sideload projects. |
| [Dyncvoke](https://github.com/Whitecat18/Dyncvoke.git) | dynamic Windows API invocation. | 



## Walkthrough

- **New to Rust?** Follow the [compilation guide](deps.md).
- **Compile Source Code**: See [README](deps.md).
- **Clean PoCs Recursively**: Use [commands](CLEAN.md).
- **Cross-Compilation with Docker**: Refer to [README](docker.md).

## Related Blogs

- [Malware Development Essentials Part 1](https://medium.com/system-weakness/malware-development-essentials-part-1-5f4626652ed9)
- [DLL Injection Using Rust](dll_injection)
- [Rust for Cybersecurity and Red Teaming](https://infosecwriteups.com/rust-for-cyber-security-and-red-teaming-275595d3fdec)
- [Advanced Rust Strategies for Windows](https://x.com/5mukx/status/1927796297123221904)

## Download as .Zip File

Download the repository: [Link](https://download.5mukx.site/#/home?url=https://github.com/Whitecat18/Rust-for-Malware-Development)

## Contributing to Rust for Malware Development

We welcome contributions to the [Rust for Malware Development repository](https://github.com/Whitecat18/Rust-for-Malware-Development). To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`.
4. Push your changes to your branch: `git push origin <branch_name>`.
5. Submit a pull request.

If you have any questions about contributing, refer to the [GitHub documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests).

## Credits / References

I would like to express my sincere gratitude to the creators of remarkable projects and fascinating techniques, who provided me with the tools and inspiration needed to create this extraordinary repository.

* [MemN0ps](https://github.com/MemN0ps)
* [hasherezade](https://github.com/hasherezade)
* [vxunderground](https://github.com/vxunderground) 
* [NUL0x4C](https://github.com/NUL0x4C)
* [mrd0x](https://github.com/mrd0x)
* [Cracked5pider](https://github.com/Cracked5pider)
* [trickster0](https://github.com/trickster0)
* [João Victor](https://github.com/joaoviictorti)
* [Maldev-Academy](https://github.com/Maldev-Academy/)

Each PoC includes a [Credits/Resource](#) section to acknowledge and respect the original creators and their contributions to the community.


### Other Essential Resources:

* https://ired.team
* https://github.com/microsoft/windows-rs
* https://github.com/retep998/winapi-rs
* https://github.com/MSxDOS/ntapi
* https://github.com/janoglezcampos/rust_syscalls
* https://github.com/rust-osdev/uefi-rs
* https://discord.gg/rust-lang-community
* https://github.com/anvie/litcrypt.rs
* https://balwurk.com/shellcode-evasion-using-webassembly-and-rust

## License

This project is licensed under the [**MIT License**](/LICENSE)
