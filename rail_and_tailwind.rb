r_pid = spawn("rails s")
t_pid = spawn("rails tailwindcss:watch")

Process.wait(r_pid)
at_exit { Process.kill("KILL", t_pid) }
