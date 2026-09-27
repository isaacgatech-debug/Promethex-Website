import React from 'react'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-16 text-white sm:px-10">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-white/60 hover:text-white">← Promethex Productions</a>
        <h1 className="mt-10 text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-sm text-white/50">Effective date: September 26, 2026</p>
        <div className="mt-10 space-y-8 text-base leading-7 text-white/75">
          <section><h2 className="text-xl font-medium text-white">Information we collect</h2><p className="mt-2">Promethex Productions may collect contact details you submit through this website and information needed to connect approved professional social accounts to our private administration dashboard.</p></section>
          <section><h2 className="text-xl font-medium text-white">How we use information</h2><p className="mt-2">We use submitted information to respond to inquiries, manage website content, review social messages and comments, schedule or approve content, and operate the Promethex Productions dashboard.</p></section>
          <section><h2 className="text-xl font-medium text-white">Instagram and Meta data</h2><p className="mt-2">When you authorize an Instagram account, we use the permissions you approve to provide messaging, comments, publishing, and insights features inside the private dashboard. Access tokens are stored server-side and are not displayed publicly. We do not sell personal information.</p></section>
          <section><h2 className="text-xl font-medium text-white">Data retention and deletion</h2><p className="mt-2">We retain information only while it is needed for the purposes above or as required by law. To request deletion of your information or revoke a connected account, email <a className="text-blue-300 hover:text-blue-200" href="mailto:promethexproductions@gmail.com">promethexproductions@gmail.com</a>.</p></section>
          <section><h2 className="text-xl font-medium text-white">Security</h2><p className="mt-2">We use reasonable administrative and technical safeguards to protect stored information. No online service can guarantee absolute security.</p></section>
          <section><h2 className="text-xl font-medium text-white">Contact</h2><p className="mt-2">Questions about this policy can be sent to <a className="text-blue-300 hover:text-blue-200" href="mailto:promethexproductions@gmail.com">promethexproductions@gmail.com</a>.</p></section>
        </div>
      </div>
    </main>
  )
}
