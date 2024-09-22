'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/ui/icons'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <SignUp.Root>
        <Clerk.Loading>
          {isGlobalLoading => (
            <>
              <SignUp.Step name='start'>
                <Card className='w-full sm:w-96'>
                  <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                      Start your journey with us
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='grid gap-y-4'>
                    <div className='grid grid-cols-2 gap-x-4'>
                      <Clerk.Connection name='github' asChild>
                        <Button
                          size='sm'
                          variant='outline'
                          type='button'
                          disabled={isGlobalLoading}
                        >
                          <Clerk.Loading scope='provider:github'>
                            {isLoading =>
                              isLoading ? (
                                <Icons.spinner className='size-4 animate-spin' />
                              ) : (
                                <>
                                  <Icons.gitHub className='mr-2 size-4' />
                                  GitHub
                                </>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection>
                      <Clerk.Connection name='google' asChild>
                        <Button
                          size='sm'
                          variant='outline'
                          type='button'
                          disabled={isGlobalLoading}
                        >
                          <Clerk.Loading scope='provider:google'>
                            {isLoading =>
                              isLoading ? (
                                <Icons.spinner className='size-4 animate-spin' />
                              ) : (
                                <>
                                  <Icons.google className='mr-2 size-4' />
                                  Google
                                </>
                              )
                            }
                          </Clerk.Loading>
                        </Button>
                      </Clerk.Connection>
                    </div>
                    <p className='flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border'>
                      or
                    </p>
                    <Clerk.Field name='emailAddress' className='space-y-2'>
                      <Clerk.Label asChild>
                        <Label>Email address</Label>
                      </Clerk.Label>
                      <Clerk.Input type='email' required asChild>
                        <Input />
                      </Clerk.Input>
                      <Clerk.FieldError className='block text-sm text-destructive' />
                    </Clerk.Field>
                    <Clerk.Field name='password' className='space-y-2'>
                      <Clerk.Label asChild>
                        <Label>Password</Label>
                      </Clerk.Label>
                      <div className="relative">
                        <Clerk.Input type={showPassword ? 'text' : 'password'} required asChild>
                          <Input className="pr-10" />
                        </Clerk.Input>
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      <Clerk.FieldError className='block text-sm text-destructive' />
                    </Clerk.Field>
                  </CardContent>
                  <CardFooter>
                    <div className='grid w-full gap-y-4'>
                      <SignUp.Action submit asChild>
                        <Button disabled={isGlobalLoading}>
                          <Clerk.Loading>
                            {isLoading => {
                              return isLoading ? (
                                <Icons.spinner className='size-4 animate-spin' />
                              ) : (
                                'Sign up'
                              )
                            }}
                          </Clerk.Loading>
                        </Button>
                      </SignUp.Action>

                      <Button variant='link' size='sm' asChild>
                        <Link href='/sign-in'>
                          Already have an account? Sign in
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </SignUp.Step>

              <SignUp.Step name="verifications">
                <SignUp.Strategy name="email_code">
                  <Card className='w-full sm:w-96'>
                    <CardHeader>
                      <CardTitle>Check your email</CardTitle>
                      <CardDescription>
                        Enter the verification code sent to your email
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='grid gap-y-4'>
                      <Clerk.Field name='code'>
                        <Clerk.Label className='sr-only'>
                          Email verification code
                        </Clerk.Label>
                        <div className='grid items-center justify-center gap-y-2'>
                          <div className='flex justify-center text-center'>
                            <Clerk.Input
                              type='otp'
                              autoSubmit
                              className='flex justify-center has-[:disabled]:opacity-50'
                              render={({ value, status }) => {
                                return (
                                  <div
                                    data-status={status}
                                    className='relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=cursor]:ring-1 data-[status=selected]:ring-1 data-[status=cursor]:ring-ring data-[status=selected]:ring-ring'
                                  >
                                    {value}
                                  </div>
                                )
                              }}
                            />
                          </div>
                          <Clerk.FieldError className='block text-center text-sm text-destructive' />
                          <SignUp.Action
                            asChild
                            resend
                            className='text-muted-foreground'
                            fallback={({ resendableAfter }) => (
                              <Button variant='link' size='sm' disabled>
                                Didn&apos;t receive a code? Resend (
                                <span className='tabular-nums'>
                                  {resendableAfter}
                                </span>
                                )
                              </Button>
                            )}
                          >
                            <Button variant='link' size='sm'>
                              Didn&apos;t receive a code? Resend
                            </Button>
                          </SignUp.Action>
                        </div>
                      </Clerk.Field>
                    </CardContent>
                    <CardFooter>
                      <div className='grid w-full gap-y-4'>
                        <SignUp.Action submit asChild>
                          <Button disabled={isGlobalLoading}>
                            <Clerk.Loading>
                              {isLoading => {
                                return isLoading ? (
                                  <Icons.spinner className='size-4 animate-spin' />
                                ) : (
                                  'Verify'
                                )
                              }}
                            </Clerk.Loading>
                          </Button>
                        </SignUp.Action>
                      </div>
                    </CardFooter>
                  </Card>
                </SignUp.Strategy>
              </SignUp.Step>
            </>
          )}
        </Clerk.Loading>
      </SignUp.Root>
    </div>
  )
}