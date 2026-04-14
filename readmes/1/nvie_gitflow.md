> [!IMPORTANT]
>
> # ⚠️ git-flow has moved to git-flow-next!
>
> **This repository is no longer maintained.** The wonderful team at [Tower](https://www.git-tower.com/) has created [**git-flow-next**](https://git-flow.sh) — a modern, fully customizable evolution of git-flow, built on a generic branch dependency model. It’s fully backward compatible with git-flow, open source, and actively maintained.
>
> ### Get started with git-flow-next:
>
> - **Website:** https://git-flow.sh
> - **GitHub:** https://github.com/gittower/git-flow-next
> - **Evolution Story:** Read about the journey from git-flow → git-flow-avh → git-flow-next in [their blog post](https://git-flow.sh/blog)
>
> ### Why git-flow-next?
>
> git-flow-next builds upon the foundation laid by the original git-flow, offering:
>
> - Full customization of branch names and workflow
> - Modern implementation with active maintenance
> - Backward compatibility with existing git-flow workflows
> - Upcoming features like stacked branches and topic branch syncing
>
> ### Thank you ❤️
>
> To everyone who has used, contributed to, and supported git-flow over the past 15+ years — thank you! Your feedback, contributions, and adoption made git-flow one of the most widely-used Git workflow tools. Special thanks to Peter van der Does for maintaining git-flow-avh, and to the folks at Tower for carrying the torch forward with git-flow-next.

---

<small>(Below, you’ll find the original documentation for historical reference.)</small>

---

git-flow
========

A collection of Git extensions to provide high-level repository operations
for Vincent Driessen's [branching model](http://nvie.com/git-model "original
blog post").


Getting started
---------------
For the best introduction to get started with `git flow`, please read Jeff
Kreeftmeijer's blog post:

[http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/)

Or have a look at one of these screen casts:

* [How to use a scalable Git branching model called git-flow](http://buildamodule.com/video/change-management-and-version-control-deploying-releases-features-and-fixes-with-git-how-to-use-a-scalable-git-branching-model-called-gitflow) (by Build a Module)
* [A short introduction to git-flow](http://vimeo.com/16018419) (by Mark Derricutt)
* [On the path with git-flow](http://codesherpas.com/screencasts/on_the_path_gitflow.mov) (by Dave Bock)


Installing git-flow
-------------------
See the Wiki for up-to-date [Installation Instructions](https://github.com/nvie/gitflow/wiki/Installation).


Integration with your shell
---------------------------
For those who use the [Bash](http://www.gnu.org/software/bash/) or
[ZSH](http://www.zsh.org) shell, please check out the excellent work on the
[git-flow-completion](http://github.com/bobthecow/git-flow-completion) project
by [bobthecow](http://github.com/bobthecow). It offers tab-completion for all
git-flow subcommands and branch names.


FAQ
---
See the [FAQ](http://github.com/nvie/gitflow/wiki/FAQ) section of the project
Wiki.


License terms
-------------
git-flow is published under the liberal terms of the BSD License, see the
[LICENSE](LICENSE) file. Although the BSD License does not require you to share
any modifications you make to the source code, you are very much encouraged and
invited to contribute back your modifications to the community, preferably
in a Github fork, of course.


### Initialization

To initialize a new repo with the basic branch structure, use:
  
		git flow init [-d]
  
This will then interactively prompt you with some questions on which branches
you would like to use as development and production branches, and how you
would like your prefixes be named. You may simply press Return on any of
those questions to accept the (sane) default suggestions.

The ``-d`` flag will accept all defaults.


### Creating feature/release/hotfix/support branches

* To list/start/finish feature branches, use:
  
  		git flow feature
  		git flow feature start <name> [<base>]
  		git flow feature finish <name>
  
  For feature branches, the `<base>` arg must be a commit on `develop`.

* To push/pull a feature branch to the remote repository, use:

  		git flow feature publish <name>
		  git flow feature pull <remote> <name>

* To list/start/finish release branches, use:
  
  		git flow release
  		git flow release start <release> [<base>]
  		git flow release finish <release>
  
  For release branches, the `<base>` arg must be a commit on `develop`.
  
* To list/start/finish hotfix branches, use:
  
  		git flow hotfix
  		git flow hotfix start <release> [<base>]
  		git flow hotfix finish <release>
  
  For hotfix branches, the `<base>` arg must be a commit on `master`.

* To list/start support branches, use:
  
  		git flow support
  		git flow support start <release> <base>
  
  For support branches, the `<base>` arg must be a commit on `master`.
